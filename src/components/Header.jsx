const data = [{id: 1,tab: "completed",},{id: 2,tab: "todo",},{id: 3,tab: "all",},];

const Header = () => {
    const darkModeToggle = () => {
        const html = document.querySelector('html');
        html.classList.toggle('dark');
    }
  return (
    <div className="flex fixed top-4 left-0 right-0 justify-center items-center container mx-auto dark:bg-slate-950 rounded-xl border w-1/2 shadow-xl">
        {data.map((item) => (
            <div key={item.id} className="p-2 cursor-pointer uppercase">
            {item.tab}
            </div>
        ))}
        <button className="button" onClick={()=>darkModeToggle()}>darkMode</button>
    </div>
  );
};

export default Header;
