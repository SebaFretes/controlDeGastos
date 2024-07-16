import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export const BudgetTracker = () => {

    const { state, totalExpenses, availableMoney, dispatch } = useBudget();

    const percentage = state.budget > 0 ? +((totalExpenses / state.budget) * 100).toFixed(2) : 0;

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar value={percentage} styles={buildStyles({
                    pathColor: percentage === 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textSize: 8,
                })} text={`${percentage}% utilizado`}/>
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button type="button" onClick={() => dispatch({type: 'reset-app'})} className="bg-red-600 w-full p-2 text-white uppercase font-bold rounded-lg">
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