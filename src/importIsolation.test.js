import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

// zanvrox-web must be deployable as a fully standalone app: no import may
// resolve to a path outside this package's own root (no ../packages,
// ../../src, parent node_modules, etc). This test statically scans every
// source file and fails the build the moment such an import is reintroduced.
const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SCAN_DIRS = ['src', 'api'];
const SOURCE_EXTENSIONS = new Set(['.js', '.jsx']);
const IMPORT_PATTERN = /(?:from\s+|import\s*\(|require\s*\()\s*['"]([^'"]+)['"]/g;

const collectSourceFiles = (dir) => {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      if (entry === 'node_modules') continue;
      files.push(...collectSourceFiles(fullPath));
    } else if (SOURCE_EXTENSIONS.has(extname(entry))) {
      files.push(fullPath);
    }
  }
  return files;
};

const sourceFiles = SCAN_DIRS.flatMap((dir) => collectSourceFiles(join(PACKAGE_ROOT, dir)));

describe('zanvrox-web import isolation', () => {
  it('found source files to scan', () => {
    expect(sourceFiles.length).toBeGreaterThan(10);
  });

  it.each(sourceFiles.map((file) => [relative(PACKAGE_ROOT, file), file]))(
    '%s has no relative imports that escape zanvrox-web',
    (_label, filePath) => {
      const content = readFileSync(filePath, 'utf8');
      const offenders = [];
      for (const match of content.matchAll(IMPORT_PATTERN)) {
        const specifier = match[1];
        if (!specifier.startsWith('.')) continue; // package imports are fine
        const resolved = resolve(dirname(filePath), specifier);
        const relativeToRoot = relative(PACKAGE_ROOT, resolved);
        if (relativeToRoot.startsWith('..')) {
          offenders.push(specifier);
        }
      }
      expect(offenders).toEqual([]);
    }
  );
});
