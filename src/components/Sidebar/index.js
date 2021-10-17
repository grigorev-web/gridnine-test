import cl from './Sidebar.module.css';
import FilterSort from './FilterSort';
import FilterTransfer from './FilterTransfer';
import FilterPrice from './FilterPrice';
import FilterCompany from './FilterCompany';


const Sidebar = () => {
  return <div className={['col-4','border',cl.sidebar].join(' ')}>
    <FilterSort/>
    <FilterTransfer/>
    <FilterPrice/>
    <FilterCompany/>
  </div>
};

export default Sidebar;
