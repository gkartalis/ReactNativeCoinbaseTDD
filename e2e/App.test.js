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

  it.only('should let user scroll through the list', async () => {
    await element(by.id('DisplayCurrencies')).swipe("up", "slow", 0.6);
    await element(by.id('DisplayCurrencies')).swipe("down", "slow", 0.6);
  });
});
