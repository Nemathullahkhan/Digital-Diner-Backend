import { MenuItem } from '../models/menuModel.js';

// Create a new menu item 
export const createMenuItem = async (req, res) => {
    try{
    const { name, description, price, category, image, ingredients, isVeg } = req.body;

    const newMenuItem = await MenuItem.create({
      name,
      description,
      price,
      category,
      image,
      ingredients,
      isVeg: Boolean(isVeg)
    });
    res.json(newMenuItem);
}catch(err){
    console.log(err);
    res.status(500).json({ message: 'Error creating menu item' });
  }
}

// Get All menu items
export const getMenuItems = async (req, res) => {
    const menuItems = await MenuItem.find({}, { __v: 0 });
    res.json(menuItems);
}

// Get a single menu item by ID
export const getMenuItemById = async (req, res) => {
    const { id } = req.params;
    const menuItem = await MenuItem.findById(id);
    if (!menuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
}

// get menu items by name
export const getMenuItemByName = async (req, res) => {
    const { name } = req.params;
    const menuItem = await MenuItem.findOne({ name });
    if (!menuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
}

// Filtered menu items by category and veg/non-veg
export const FilteredMenuItems = async (req, res) => {
    const {category} = req.params;
    const result = await MenuItem.find({category: category}, {__v: 0});
    if (!result) {
        return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(result);
}
