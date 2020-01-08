import React from 'react';
import 'react-native';
import {toHaveTextContent} from '@testing-library/jest-native';
import {render, cleanup, fireEvent, wait, getByTestId, waitForElementToBeRemoved, act} from '@testing-library/react-native';
import {ModalBody} from '../src/components/ModalBody';
import {currencyStatsResults} from '../__mocks__/currencyStatsResults';

afterEach(cleanup);
expect.extend({ toHaveTextContent });// Note: test renderer must be required after react-native.

describe('<ModalBody />', () => {
  it('should show a loader if fetching data', () => {
    const props = {
      isLoading: true,
      data: {},
      errorMessage: ''
    }

    const { getByTestId } = render(<ModalBody {...props} />);
    const loader = getByTestId('modal-loader');
    expect(loader).toBeTruthy();
  });
  
  it('should show error message if something goes wrong', () => {
    const props = {
      isLoading: false,
      data: {},
      errorMessage: 'Something went wrong!'
    }

    const { getByTestId } = render(<ModalBody {...props} />);
    const message = getByTestId('modal-error-message');
    expect(message).toHaveTextContent(props.errorMessage);
  });
  
  it('should show all the currency stats', async () => {
     const props = {
      isLoading: false,
      data: currencyStatsResults,
      errorMessage: ''
    }

    const { getByText} = render(<ModalBody {...props} />);
    await Object.keys(currencyStatsResults).forEach(async key => {
      const text = getByText(key);
      await wait(() => expect(text).toHaveTextContent(`${key}: ${currencyStatsResults[key]}`));
    })
  });

})