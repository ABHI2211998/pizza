import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // useLoaderData for getting data
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.name} />
      ))}
    </ul>
  );
}

// <!-- 1 create loder -->
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
