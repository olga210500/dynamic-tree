import React, { useState } from "react";
import "../CategoryComponent/Category.scss";
import { Category } from "../../models/models";
import '../../icons.scss'
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
        <>
            <div className="container">
                <div className="category">
                    <span className={`level-${level <= 3 ? level + 1 : 4} rectangle custom-text`}>{name}</span>
                </div>
                <div className="category_actions">
                    <div className="category_actions_icon" onClick={addCategory}>
                        <i className="icon plus-icon"></i>
                    </div>
                    {level !== 0 && <>
                        <div className="category_actions_icon" onClick={editCategory}>
                            <i className="icon edit-icon"></i>

                        </div>
                        <div className="category_actions_icon ">
                            <i className="icon cancel-icon delete"></i>
                        </div>
                    </>}

                </div>

            </div>
            <div className="categories">
                <ol className="level-2-wrapper" style={gridStyle(categories.length + (addNewCategory ? 1 : 0))}>

                    {categories.map((Category, index) => (
                        <li>
                            <Categories key={index} name={Category.name} level={Category.level} />
                        </li>
                    ))}
                    {addNewCategory &&
                        <div className="container">
                            <div className="add-category rectangle">
                                <input
                                    className="custom-text custom-input"
                                    type="text"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    placeholder="Add category"
                                />
                            </div>
                            <div className="category_actions">
                                <div className="category_actions_icon" onClick={cancelCategory}>
                                    <i className="icon cancel-icon cancel"></i>
                                </div>
                                <div className="category_actions_icon" onClick={saveCategory}>
                                    <i className="icon done-icon done"></i>
                                </div>
                            </div>
                        </div>
                    }
                </ol>

            </div>
        </>
    );
};

export default Categories;
