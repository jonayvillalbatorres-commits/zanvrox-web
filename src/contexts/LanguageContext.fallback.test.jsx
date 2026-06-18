import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('../content', async () => {
  const actual = await vi.importActual('../content')
  return {
    ...actual,
    detectBrowserLanguage: () => 'fr',
    loadContent: vi.fn().mockRejectedValue(new Error('load failed')),
  }
})

const { getCachedContent } = await import('../content')
const { LanguageProvider, useLanguage } = await import('./LanguageContext')

function FallbackProbe() {
  const { language, content } = useLanguage()
  return (
    <div>
      <div data-testid="language">{language}</div>
      <h1>{content?.seo?.home?.title}</h1>
    </div>
  )
}

describe('LanguageProvider fallback', () => {
  test('falls back to english content when localized content fails to load', async () => {
    const englishContent = getCachedContent('en')

    render(
      <LanguageProvider>
        <FallbackProbe />
      </LanguageProvider>,
    )

    await waitFor(() => {
      expect(screen.getByTestId('language')).toHaveTextContent('fr')
    })

    expect(await screen.findByRole('heading', { name: englishContent.seo.home.title })).toBeInTheDocument()
  })
})
