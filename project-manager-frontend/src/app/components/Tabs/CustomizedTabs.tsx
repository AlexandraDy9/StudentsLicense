import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {CustomizedTabsProps, HandlersProps} from "./types";
import {useHandlers} from "./useHandlers";
import TabPanel from "./TabPanel";

//style
import "./CustomizedTabs.scss";
import cn from "../../utils/classNames";

const bem = cn("customize-tabs");

export default function CustomizedTabs({tabs, tabsPanel}: CustomizedTabsProps) {
  const handler: HandlersProps = useHandlers();

  return (
    <div className={bem('root')}>
      <AppBar position="static" color="default">
        <Tabs
          value={handler.value}
          onChange={handler.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((value: any, key: number) => (
            typeof value === "string"
              ? <Tab key={key} label={value}/>
              : <Tab key={key} icon={value}/>
          ))}
        </Tabs>
      </AppBar>
      {tabsPanel.map((content: any, key: number) => (
        <TabPanel key={key} value={handler.value} index={key}>
          {content}
        </TabPanel>
      ))}
    </div>
  );
}
