import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import BetaForm from './BetaForm';
import { getCachedContent } from '../../content';
import { submitBetaLead } from '../../utils/betaLead';

vi.mock('../../utils/betaLead', () => ({
  submitBetaLead: vi.fn(),
}));

const formContent = getCachedContent('en').pages.workforceBeta.form;

const renderForm = () =>
  render(
    <MemoryRouter>
      <BetaForm formContent={formContent} />
    </MemoryRouter>
  );

describe('BetaForm', () => {
  beforeEach(() => {
    submitBetaLead.mockReset();
  });

  test('consent checkbox is not pre-checked', () => {
    renderForm();
    const consentCheckbox = screen.getByRole('checkbox');
    expect(consentCheckbox).not.toBeChecked();
  });

  test('blocks submission and reports an error when consent is not given', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText(formContent.fields.businessName), 'Maple Street Kitchen');
    await user.selectOptions(screen.getByLabelText(formContent.fields.businessType), 'restaurant');
    await user.type(screen.getByLabelText(formContent.fields.contactName), 'Jordan Smith');
    await user.type(screen.getByLabelText(formContent.fields.email), 'jordan@maplestreet.example');
    await user.type(screen.getByLabelText(formContent.fields.city), 'Toronto');
    await user.type(screen.getByLabelText(formContent.fields.employeeCount), '12');
    await user.type(screen.getByLabelText(formContent.fields.locationCount), '1');
    await user.type(screen.getByLabelText(formContent.fields.currentMethod), 'Paper timesheets');
    await user.type(screen.getByLabelText(formContent.fields.participantCount), '5');

    await user.click(screen.getByRole('button', { name: formContent.cta }));

    expect(await screen.findByText(formContent.errors.consent)).toBeInTheDocument();
    expect(submitBetaLead).not.toHaveBeenCalled();
  });

  test('rejects an invalid business email', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText(formContent.fields.email), 'not-an-email');
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: formContent.cta }));

    expect(await screen.findByText(formContent.errors.email)).toBeInTheDocument();
    expect(submitBetaLead).not.toHaveBeenCalled();
  });

  test('submits a fully valid application after the anti-spam delay', async () => {
    submitBetaLead.mockResolvedValue({ ok: true, id: 'test-id' });
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText(formContent.fields.businessName), 'Maple Street Kitchen');
    await user.selectOptions(screen.getByLabelText(formContent.fields.businessType), 'restaurant');
    await user.type(screen.getByLabelText(formContent.fields.contactName), 'Jordan Smith');
    await user.type(screen.getByLabelText(formContent.fields.email), 'jordan@maplestreet.example');
    await user.type(screen.getByLabelText(formContent.fields.city), 'Toronto');
    await user.type(screen.getByLabelText(formContent.fields.employeeCount), '12');
    await user.type(screen.getByLabelText(formContent.fields.locationCount), '1');
    await user.type(screen.getByLabelText(formContent.fields.currentMethod), 'Paper timesheets');
    await user.type(screen.getByLabelText(formContent.fields.participantCount), '5');
    await user.click(screen.getByRole('checkbox'));

    await new Promise((resolve) => setTimeout(resolve, 1600));
    await user.click(screen.getByRole('button', { name: formContent.cta }));

    await waitFor(() => expect(submitBetaLead).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(formContent.confirmation)).toBeInTheDocument();
  });
});
