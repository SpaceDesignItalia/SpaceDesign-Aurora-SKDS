import { useAurora } from "../context/AuroraProvider.jsx";

export const useFeatureFlag = () => {
  const { licenseKey, projectToken } = useAurora();

  const checkFeatureFlag = async (featureFlagKey, featureFlagData) => {
    // Costruisci l'URL con i parametri come query string
    const url = new URL(
      `http://localhost:3000/API/v1/project/GET/get-feature-flag`
    );
    url.searchParams.append("featureFlagKey", featureFlagKey);

    if (featureFlagData) {
      // Se featureFlagData è un oggetto, convertilo in JSON string per la query string
      if (typeof featureFlagData === "object") {
        url.searchParams.append("data", JSON.stringify(featureFlagData));
      } else {
        url.searchParams.append("data", featureFlagData);
      }
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${projectToken}`,
        "X-License-Key": licenseKey,
      },
    });

    const data = await response.json();
    return data;
  };

  return { checkFeatureFlag };
};
