export const NOVA_LOKACIJA = "NOVA_LOKACIJA";

export const novaLokacija = (naziv) => {
  return {
    type: NOVA_LOKACIJA,
    lokacija: {
      naziv: naziv,
    },
  };
};
