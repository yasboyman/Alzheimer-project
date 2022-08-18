import React from 'react';

type ItemsProperty = {
    name: string;
    href: string;
}

type SidebarProps = { items: ItemsProperty[] }

const Sidebar = ({ items }: SidebarProps) => {
    return (
        <div>
            { items.map((item) => (
                <div key={item.href}>
                    <a role='navigation' href={item.href}>{item.name}</a>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
