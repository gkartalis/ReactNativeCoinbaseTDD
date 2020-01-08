import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {toHaveTextContent} from '@testing-library/jest-native';
import {allCurrenciesResults} from '../__mocks__/allCurrenciesResults';
import {render, cleanup, fireEvent, wait} from '@testing-library/react-native';
import {DisplayCurrencies} from '../src/components/DisplayCurrencies';
import App from '../App';

afterEach(cleanup);
expect.extend({ toHaveTextContent });// Note: test renderer must be required after react-native.

describe('<DisplayCurrencies />', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('should show a loader if it is fetching data', () => {
    const props = {
      isLoading: true
    };
    const { getByTestId } = render(<DisplayCurrencies {...props} />);
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });

  it('should show a message if no data is available and it has finished fetching data', () => {
    const props = {
      isLoading: false,
      data: []
    };
    const { getByText } = render(<DisplayCurrencies {...props} />);
    const message = 'No available data, try later.';
    const text = getByText(message);
    expect(text).toHaveTextContent(message);
  })

  it('should show a list of the fetched items', () => {
    const props = {
      isLoading: false,
      data: allCurrenciesResults
    }
    const {getByText} = render(<DisplayCurrencies {...props} />);

    allCurrenciesResults.forEach(element => {
      const currency = getByText(element.display_name);
      expect(currency).toHaveTextContent(element.display_name);
    });
  });
  
  it('should open a modal when a list item is clicked', async () => {
    const props = {
      isLoading: false,
      data: allCurrenciesResults,
      setSelectedProduct: () => jest.fn(),
      showModal: false
    }
    const {getByTestId} = render(<DisplayCurrencies {...props} />);
    const firstItem = getByTestId(allCurrenciesResults[0].id);
    fireEvent.press(firstItem);

    await wait(() => expect(getByTestId('modal')).toBeTruthy());
  })
});
