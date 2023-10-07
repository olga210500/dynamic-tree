import React, { useState } from "react";
import "../CategoryComponent/Category.scss";
import { Category } from "../../models/models";

const Categories: React.FC<Category> = ({ name, level }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [addNewCategory, setAddNewCategory] = useState<boolean>(false);
    const [newCategory, setNewCategory] = useState<string>("");
    const [newLevel, setNewLevel] = useState<number>(0);

    const addCategory = () => {
        setAddNewCategory(true);
    };
    const saveCategory = () => {
        if (newCategory) {
            const newLevel = level + 1;
            setCategories([...categories, { name: newCategory, level: newLevel }]);
            setNewCategory("");
            setAddNewCategory(false);
            setNewLevel(newLevel);
        }
    };
    const cancelCategory = () => {
        setNewCategory("");
        setAddNewCategory(false);
    };
    const editCategory = () => { };
    const deleteCategory = () => { };

    return (
        <div className="container">
            <div className="category_actions">
                <div className="category_actions_add">
                    <button onClick={addCategory} type="button">
                        +
                    </button>
                </div>
                {addNewCategory && <div>
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Add category"
                    />
                    <button onClick={saveCategory} type='button'>Add</button>

                    <button onClick={cancelCategory} type='button'>Cancel</button>

                </div>
                }
            </div>

            <ul className="level-2-wrapper">
                {categories.map((Category, index) => (

                    <>
                        <li>
                            <h2 className="level-2 rectangle">{Category.name}</h2>

                            <ol className="level-2-wrapper">
                                <Categories name={Category.name} level={Category.level} />
                            </ol>

                        </li>
                    </>


                ))}

            </ul>
        </div>
    );
};

export default Categories;
