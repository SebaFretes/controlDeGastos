import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

export const FilterList = () => {

    const { state, dispatch } = useBudget();

    const handleChange = (e) => {
        const selectedCategoryId = e.target.value;
        dispatch({ type: 'add-filter-category', payload: { id: selectedCategoryId } });

    }

  return (
    <div className="bg-white shadow-lg p-10 rounded-lg">
        <form>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label>Filtrar Gastos</label>
                <select className="bg-slate-100 p-2 flex-1 rounded" onChange={handleChange}>
                    <option value="">--Todas las Categorías--</option>
                      {categories.map(cat => (
                          <option key={cat.id} value={cat.id}>
                              {cat.name}
                          </option>
                      ))}
                </select>
            </div>
        </form>
    </div>
  )
}
