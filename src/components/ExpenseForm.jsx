import { categories } from "../data/categories"

export const ExpenseForm = () => {
    return (
        <>
            <form className="space-y-5">
                <h1 className="text-center text-2xl uppercase font-black border-blue-500 border-b-4 py-2">Gastos</h1>

                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Gasto:
                    </label>
                    <input type="text" className="bg-slate-100 p-2" placeholder="Añadí el nombre del gasto"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Cantidad:
                    </label>
                    <input type="number" className="bg-slate-100 p-2" placeholder="Agregá la cantidad"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Categoría:
                    </label>
                    <select id="category" className="bg-slate-100 p-2" name="category">
                        <option value="">--Seleccioná la categoría--</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <input type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={'Registrar Gasto'}/>

            </form>
        </>
    )
}