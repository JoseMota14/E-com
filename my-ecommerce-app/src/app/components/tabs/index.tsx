import { useState } from "react";
import { LuX } from "react-icons/lu";
import { Container, TabButton, TabContainer, TabContent } from "./styles";

export function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab.id);
  };

  const tabsData = [
    {
      id: 1,
      isOpen: true,
      label: "tab",
    },
    {
      id: 2,
      isOpen: true,
      label: "tab",
    },
  ] as any[];

  return (
    <Container>
      <TabContainer>
        {tabsData.map((tab, index) => (
          <TabButton
            key={index}
            active={tab.id === activeTab ? "Y" : "N"}
            onClick={() => handleTabChange(tab)}
          >
            <span onClick={(e) => {}}>
              <LuX />
            </span>
          </TabButton>
        ))}
      </TabContainer>

      <TabContent>
        {tabsData.map((tab, index) => (
          <div
            key={index}
            style={{ display: tab.id === activeTab ? "block" : "none" }}
          >
            {tab.id === activeTab && <h1>a</h1>}
          </div>
        ))}
      </TabContent>
    </Container>
  );
}
