import { MouseEvent } from "react";
import styles from "@/styles/navbar/Menu.module.scss";
import MenuActive from "@/components/Navbar//MenuActive";

interface PropTypes {
  isOpened: boolean;
  handleIsOpened: VoidFunction;
}

export default function Menu(props: PropTypes) {
  const { isOpened, handleIsOpened } = props;

  function checkClose(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    console.log(target);
    if (target.id === "menu") handleIsOpened();
  }

  return (
    <div
      className={`${styles.menu} ${isOpened && styles.opened}`}
      onClick={checkClose}
      id="menu"
    >
      <div className={styles.menu_container}>
        <MenuActive handleMenu={handleIsOpened} />
      </div>
    </div>
  );
}
