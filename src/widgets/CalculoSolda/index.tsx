import { useState } from "react";
import Alert from "@/Components/Alert";

interface InterfaceSoldaInputs {
  tensao: number;
  corrente: number;
  tempo: number;
  comprimento: number;
  pressao: number;
}

const CalculoSolda = () => {
  const [params, setParams] = useState<InterfaceSoldaInputs>({
    tensao: 0,
    corrente: 0,
    tempo: 0,
    comprimento: 0,
    pressao: 0,
  });
  const [errorModal, setErrorModal] = useState(false);

  const [isFormValidated, setIsFormValidated] = useState(false);

  const [resistencia, setResistencia] = useState<number>(0);
  const [forca, setForca] = useState<number>(0);
  const [energia, setEnergia] = useState<number>(0);
  const [diametro, setDiametro] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, valueAsNumber } = event.target;
    setParams({ ...params, [id]: valueAsNumber });
    setIsFormValidated(
      Object.keys(params).every(
        (key) =>
          params[key as keyof InterfaceSoldaInputs] !== undefined &&
          params[key as keyof InterfaceSoldaInputs] !== null &&
          params[key as keyof InterfaceSoldaInputs] !== 0 &&
          !isNaN(params[key as keyof InterfaceSoldaInputs])
      )
    );
  };

  const calcularParametrosSolda = () => {
    const { tensao, corrente, tempo, comprimento, pressao } = params;

    // Calcular parâmetros de saída
    const resistencia = tensao / corrente;
    const forca = pressao * comprimento;
    const energia = tensao * corrente * tempo;
    const diametro = (4 * resistencia * comprimento) / (Math.PI * pressao);

    // Exibir os resultados se todos os inputs estiverem preenchidos
    if (
      params.comprimento &&
      params.corrente &&
      params.pressao &&
      params.tempo &&
      params.tensao
    ) {
      setResistencia(resistencia);
      setForca(forca);
      setEnergia(energia);
      setDiametro(diametro);
      setErrorModal(false);
    } else {
      //   alert("Porfavor Preencha todos os campos!");
      setErrorModal(true);
      return;
    }
  };

  return (
    <div className="mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      <h3 className="text-center text-4xl font-semibold text-gray-800 py-4 px-6">
        Calculadora de Solda por Resistência
      </h3>

      <form className="px-6 py-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            aria-label="tensao"
            htmlFor="tensao"
          >
            Tensão (V):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tensao"
            type="number"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            aria-label="corrente"
            htmlFor="corrente"
          >
            Corrente (A):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="corrente"
            type="number"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            aria-label="tempo"
            htmlFor="tempo"
          >
            Tempo (s):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tempo"
            type="number"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            aria-label="comprimento"
            htmlFor="comprimento"
          >
            Comprimento (mm):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comprimento"
            type="number"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            aria-label="pressao"
            htmlFor="pressao"
          >
            Pressão (N/mm²):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pressao"
            type="number"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isFormValidated ? "" : "bg-gray-400 cursor-not-allowed"
            }`}
            type="button"
            disabled={!isFormValidated}
            onClick={calcularParametrosSolda}
            aria-label="Calcular Resistência da Solda"
          >
            Calcular
          </button>
        </div>
      </form>

      <div className="my-8 mx-6">
        <Alert
          isActive={errorModal}
          closeFunction={() => setErrorModal(false)}
        />
        <h3 className="text-xl font-medium mb-4">Resultados:</h3>
        <div className="flex flex-col space-y-2">
          <p className="text-lg">
            <span className="font-medium">Resistência Elétrica:</span>{" "}
            {resistencia}
          </p>
          <p className="text-lg">
            <span className="font-medium">Força de Soldagem:</span> {forca}
          </p>
          <p className="text-lg">
            <span className="font-medium">Energia de Soldagem:</span> {energia}
          </p>
          <p className="text-lg">
            <span className="font-medium">Diâmetro da Solda:</span> {diametro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculoSolda;
