import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getCachedContent } from '../content'
import { LanguageProvider, useLanguage } from './LanguageContext'

function LanguageProbe() {
  const { language, setLanguage, content } = useLanguage()
  return (
    <div>
      <div data-testid="language">{language}</div>
      <h1>{content?.pages?.home?.heroTitle}</h1>
      <button type="button" onClick={() => setLanguage('fr')}>
        switch
      </button>
    </div>
  )
}

describe('LanguageProvider', () => {
  test('switches language and updates document locale state', async () => {
    const user = userEvent.setup()
    const frenchContent = getCachedContent('fr')

    render(
      <LanguageProvider>
        <LanguageProbe />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('language')).toHaveTextContent('en')
    await user.click(screen.getByRole('button', { name: 'switch' }))

    await waitFor(() => {
      expect(screen.getByTestId('language')).toHaveTextContent('fr')
    })

    expect(await screen.findByRole('heading', { name: frenchContent.pages.home.heroTitle })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('fr')
    expect(document.documentElement.dir).toBe('ltr')
  })
})
