const Sidebar = () => {
  return (
    <div className="h-full p-4 border-r text-xl font-bold bg-[#ebebeb] border-[rgb(237,238,243)]">
      <h2 className="text-black mb-4 ml-2">Sidebar</h2>
      <ul className="menu bg-base-200  rounded-box">
        <li>
          <a>Info</a>
        </li>
        <li>
          <details open>
            <summary>Test</summary>
            <ul>
              <li>
                <a>Limiting Resources</a>
              </li>
              <li>
                <a>Limiting Resources</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
