import { useState, useCallback  } from "react";
import { Drawer, Menu, Button } from "react-daisyui";

export default function ReactDaisySideNav() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);

  return (
    <Drawer
      open={visible}
      onClickOverlay={toggleVisible}
      side={
      <Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
        <Menu.Item>
          <a href=".">Sidebar Item 1</a>
        </Menu.Item>
        <Menu.Item>
          <a href=".">Sidebar Item 2</a>
        </Menu.Item>
      </Menu>
    }>
      <Button color="primary" onClick={toggleVisible}>
        Open drawer
      </Button>
    </Drawer>
  );
}
