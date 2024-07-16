import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const BudgetTracker = () => {

    const { state, totalExpenses, availableMoney } = useBudget();

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="gastos img"/>
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button type="button" className="bg-red-600 w-full p-2 text-white uppercase font-bold rounded-lg">
                    Resetear App
                </button>
            </div>

            <div>
                <AmountDisplay label="Presupuesto" amount={state.budget}/>
            </div>

            <div>
                <AmountDisplay label="Gastado" amount={totalExpenses}/>
            </div>

            <div>
                <AmountDisplay label="Disponible" amount={availableMoney}/>
            </div>

        </div>
        </>
    )
}