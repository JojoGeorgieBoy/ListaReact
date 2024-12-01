import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

//import React, { useState } from 'react';

//interface Item {
//    id: number;
//    name: string;
//}

//const ListCRUD = () => {
//    const [items, setItems] = useState < Item[] > ([
//        { id: 1, name: 'Item 1' },
//        { id: 2, name: 'Item 2' },
//        { id: 3, name: 'Item 3' },
//    ]);

//    const [newItem, setNewItem] = useState('');
//    const [editingItem, setEditingItem] = useState < Item | null > (null);

//    const handleAddItem = () => {
//        if (newItem.trim() !== '') {
//            setItems([...items, { id: items.length + 1, name: newItem }]);
//            setNewItem('');
//        }
//    };

//    const handleDeleteItem = (id: number) => {
//        setItems(items.filter((item) => item.id !== id));
//    };

//    const handleEditItem = (item: Item) => {
//        setEditingItem(item);
//    };

//    const handleUpdateItem = () => {
//        if (editingItem) {
//            setItems(
//                items.map((item) =>
//                    item.id === editingItem.id ? { ...item, name: newItem } : item
//                )
//            );
//            setEditingItem(null);
//            setNewItem('');
//        }
//    };

//    return (
//        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//            <h2 className="text-lg font-bold mb-4">List CRUD</h2>
//            <div className="flex justify-between mb-4">
//                <input
//                    type="text"
//                    value={newItem}
//                    onChange={(e) => setNewItem(e.target.value)}
//                    placeholder="Add new item"
//                    className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
//                />
//                {editingItem ? (
//                    <button
//                        onClick={handleUpdateItem}
//                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                    >
//                        Update
//                    </button>
//                ) : (
//                    <button
//                        onClick={handleAddItem}
//                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                    >
//                        Add
//                    </button>
//                )}
//            </div>
//            <ul>
//                {items.map((item) => (
//                    <li
//                        key={item.id}
//                        className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-lg"
//                    >
//                        {editingItem && editingItem.id === item.id ? (
//                            <input
//                                type="text"
//                                value={newItem}
//                                onChange={(e) => setNewItem(e.target.value)}
//                                className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
//                            />
//                        ) : (
//                            <span className="text-sm text-gray-700">{item.name}</span>
//                        )}
//                        <div className="flex justify-end">
//                            <button
//                                onClick={() => handleEditItem(item)}
//                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
//                            >
//                                Edit
//                            </button>
//                            <button
//                                onClick={() => handleDeleteItem(item.id)}
//                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                            >
//                                Delete
//                            </button>
//                        </div>
//                    </li>
//                ))}
//            </ul>
//        </div>
//    );
//};

//export default ListCRUD;
