interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

const List = <T,>({ items, renderItem, className = "" }: ListProps<T>) => {
  return (
    <ul className={`divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      {items.map((item, index) => (
        <li
          key={(item as any).id ?? index} // id가 없으면 index로 fallback
          className="p-4 hover:bg-gray-50 cursor-pointer"
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
