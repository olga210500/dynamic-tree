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
    const gridStyle = (numberOfColumns: number) => {
        return { gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }
    };


    return (
        <div className="container">
            {level === 0 && <h1 className="level-1 rectangle">CEO</h1>}
           
            <div className="categories">
            <ol className="level-2-wrapper" style={gridStyle(categories.length + 1)}>
                    {categories.map((Category, index) => (
                        <>
                            <li>
                                <h2 className="level-2 rectangle">{Category.name}</h2>

                                <ol className="level-2-wrapper" style={gridStyle(categories.length)}>
                                    <Categories key={index} name={Category.name} level={Category.level} />
                                </ol>
                            </li>
                        </>

                    ))}
                </ol>
            <div className="category_actions">
                <div className="category_actions_add">
                    <button onClick={addCategory} type="button">
                        +
                    </button>
                </div>
                {level !== 0 && <>
                    <div className="category_actions_edit">
                        <button onClick={editCategory} type="button">
                            e
                        </button>
                    </div>
                    <div className="category_actions_delete">
                        <button onClick={deleteCategory} type="button">
                            x
                        </button>
                    </div>
                </>}
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
            </div>
        </div>
    );
};

export default Categories;
