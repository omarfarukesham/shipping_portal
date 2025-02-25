import { useDataContext } from '@/context/dataContext';
import removeEmptyKeys from '@/utilities/removeEmptyKeys';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';

export default function useProductAddUpdateDataContext() {
  const { data, setData } = useDataContext();
  const markets = data?.markets || [];

  const publishStatuses = useWatch({ name: 'publishStatuses' });

  //Filtering and mapping marketCode from publishStatuses (Selected Markets)
  const publishedMarketCodes = Object.keys(
    removeEmptyKeys(publishStatuses, ['INACTIVE']),
  );

  //Additional value arrays From Selected Markets
  const infoFromPublishedMarkets = markets
    .filter((m) => publishedMarketCodes.includes(m.marketCode))
    .reduce(
      (info, m) => ({
        languageCodes: [...info.languageCodes, m.languageCode],
        currencyCodes: [...info.currencyCodes, m.currencyCode],
      }),
      { languageCodes: [], currencyCodes: [] },
    );

  useEffect(() => {
    setData({
      ...data,
      selectedMarketCodes: publishedMarketCodes,
      selectedLanguageCodes: Array.from(
        new Set(infoFromPublishedMarkets.languageCodes),
      ),
      selectedCurrencyCodes: Array.from(
        new Set(infoFromPublishedMarkets.currencyCodes),
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publishStatuses]);
}
