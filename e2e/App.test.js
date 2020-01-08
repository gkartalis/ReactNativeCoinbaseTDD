describe('<App />', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render without crashing', async () => {
    await expect(element(by.id('App'))).toBeVisible();
  });

  it('should show DisplayCurrencies component', async () => {
    await expect(element(by.id('DisplayCurrencies'))).toExist();
  });

  it('the modal should not be visible', async () => {
    await expect(element(by.id('CurrencyDetailsModal'))).toBeNotVisible();
  });
});
