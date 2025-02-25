"use client";

import React from "react";

import CollectionItemsGrid from "./collection-items-grid";
import CollectionItemsHeader from "./collection-items-header";
import CollectionItemsList from "./collection-items-list";

interface CollectionProps {
  collectionItems: any[];
  address: string;
  name: string;
}

const Collection: React.FC<CollectionProps> = ({
  collectionItems,
  address,
  name
}) => {
  const [view, setView] = React.useState<"grid" | "list">("grid");
  return (
    <div>
      <CollectionItemsHeader
        itemsCount={collectionItems.length}
        view={view}
        setView={setView}
      />
      {view === "grid" ? (
        <CollectionItemsGrid
          name={name}
          address={address}
          items={collectionItems}
        />
      ) : (
        <CollectionItemsList
          name={name}
          address={address}
          items={collectionItems}
        />
      )}
    </div>
  );
};

export default Collection;
