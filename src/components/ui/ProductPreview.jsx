import AIPreview from '../previews/AIPreview';
import AccountingPreview from '../previews/AccountingPreview';
import ExpensesPreview from '../previews/ExpensesPreview';
import InventoryPreview from '../previews/InventoryPreview';
import InvoicesPreview from '../previews/InvoicesPreview';
import ProductionPreview from '../previews/ProductionPreview';
import PurchasesPreview from '../previews/PurchasesPreview';
import ReportsPreview from '../previews/ReportsPreview';
import WarehousePreview from '../previews/WarehousePreview';

const PREVIEW_COMPONENTS = {
  accounting: AccountingPreview,
  invoices: InvoicesPreview,
  inventory: InventoryPreview,
  warehouse: WarehousePreview,
  production: ProductionPreview,
  purchases: PurchasesPreview,
  expenses: ExpensesPreview,
  ai: AIPreview,
  reports: ReportsPreview,
};

const PREVIEW_LABELS = {
  accounting: 'Accounting',
  invoices: 'Invoices',
  inventory: 'Inventory',
  warehouse: 'Warehouse',
  production: 'Production',
  purchases: 'Purchases',
  expenses: 'Expenses',
  ai: 'AI Insights',
  reports: 'Analytics',
};

export default function ProductPreview({
  type = 'accounting',
  imageSrc,
  imageAlt = 'Product preview',
}) {
  const PreviewComponent = PREVIEW_COMPONENTS[type] || AccountingPreview;
  const label = PREVIEW_LABELS[type] || PREVIEW_LABELS.accounting;

  return (
    <div className="overflow-hidden rounded-xl border border-zx-border bg-zx-bg/80 shadow-[0_18px_36px_rgba(2,8,24,0.5)]">
      <div className="flex items-center justify-between border-b border-zx-border bg-zx-surface px-3 py-2">
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-zx-danger/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-zx-warning/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-zx-success/80" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.16em] text-zx-text-muted">{label}</p>
        <span className="h-2 w-2 rounded-full bg-zx-accent/80" />
      </div>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          width={1600}
          height={960}
          className="h-auto w-full object-cover"
          loading="eager"
          decoding="async"
        />
      ) : (
        <PreviewComponent />
      )}
    </div>
  );
}
