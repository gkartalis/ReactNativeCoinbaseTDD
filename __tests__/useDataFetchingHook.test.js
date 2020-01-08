import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { cleanup } from '@testing-library/react-native';
import useDataFetching from '../src/customHooks/useDataFetching';
import {allCurrenciesResults} from '../__mocks__/allCurrenciesResults';
import {API_URL} from '../src/constants/api';


beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: allCurrenciesResults}))
})

afterEach(cleanup);

describe('useDataFetching custom hook', () => {
  it('should fetch data and save them to data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDataFetching(`${API_URL}/products`));

    expect(result.current.errorMessage).toBe('');
    expect(result.current.data.length).toBe(0);
    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.errorMessage).toBe('');
    expect(result.current.data).toMatchObject(allCurrenciesResults)
  })
});
