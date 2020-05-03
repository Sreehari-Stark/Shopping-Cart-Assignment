import React, {Component} from 'react';
import {NavLink} from "react-dom";
import { Icon, InlineIcon } from '@iconify/react';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';


const Search = () =>
{
    return(
        
      <div className="searchboxitem" role="textbox">
          <Icon icon={searchOutlined} />   
      </div>
     
    );
}
export default Search;