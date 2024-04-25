export default function Page() {
  return (
    <div className="flex-col gap-2 w-full">
      <div className="bg-surface-secondary w-full p-2">
        <p className="text-surface-secondary-foreground text-xs font-medium">
          This month
        </p>
      </div>
      <ul className="gap-2">
        <li className="p-2 text-xs">
          <p>Brag 1</p>
        </li>
        <hr />
        <li className="p-2 text-xs">
          <p>Brag 2</p>
        </li>
      </ul>
      <div className="bg-surface-secondary w-full p-2">
        <p className="text-surface-secondary-foreground text-xs font-medium">
          Last month
        </p>
      </div>
      <ul className="gap-2">
        <li className="p-2 text-xs">
          <p>Brag 1</p>
        </li>
      </ul>
    </div>
  );
}
