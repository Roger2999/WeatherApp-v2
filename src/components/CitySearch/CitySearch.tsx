import { useState } from "react";
import type { Result } from "../../types/types";
import { Autocomplete, TextField } from "@mui/material";

interface Props {
  onSelectCity: (city: Result) => void;
  inputCity: string;
  setInputCity: React.Dispatch<React.SetStateAction<string>>;
  cityData:
    | {
        results: Result[];
        generationtime_ms: number;
      }
    | undefined;
  isCityLoading: boolean;
}
export const CitySearch = ({
  onSelectCity,
  inputCity,
  setInputCity,
  cityData,
  isCityLoading,
}: Props) => {
  const [selectedCity, setSelectedCity] = useState<Result | null>(null);
  const cityOptions = cityData?.results || [];
  return (
    <>
      <Autocomplete
        disablePortal
        options={cityOptions} // opciones que se muestran en el dropdown
        getOptionLabel={(option) => `${option.name}, ${option.country}`} // etiqueta que se muestra en cada opción
        getOptionKey={(option) => option.id}
        loading={isCityLoading} // muestra un spinner mientras carga
        value={selectedCity} // valor seleccionado
        onChange={(_, newValue) => {
          setSelectedCity(newValue);
          if (newValue) onSelectCity(newValue); // llama a la función onSelectCity con la ciudad seleccionada
        }}
        inputValue={inputCity} // valor del input
        onInputChange={(_, newInputValue) => setInputCity(newInputValue)}
        sx={{
          width: 500,
          "& .MuiInputBase-root": {
            backgroundColor: "#25253f",
            borderRadius: "12px",
            color: "#fff", // color del texto del input
          },
          "& .MuiInputLabel-root": {
            color: "#9ca3af", // color del label
          },
          "& .Mui-focused .MuiInputLabel-root": {
            color: "#38bdf8", // color del label cuando está enfocado
          },
          "& .MuiFilledInput-underline:before": {
            borderBottomColor: "#38bdf8", // línea inferior antes del foco
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: "#0ea5e9", // línea inferior cuando está enfocado
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            color="info"
            label="Search a place..."
            variant="filled"
          />
        )}
      />
    </>
  );
};
