import * as FS from "expo-file-system";
export const NOVA_LOKACIJA = "NOVA_LOKACIJA";

export const novaLokacija = (naziv, slika) => {
  return async (dispatch) => {
    const imeDat = slika.split("/").pop();
    const novaPutanja = FS.documentDirectory + imeDat;

    try {
      await FS.moveAsync({
        from: slika,
        to: novaPutanja,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    dispatch({ type: NOVA_LOKACIJA, lokacija: { naziv: naziv, slika: novaPutanja } });
  };
};
