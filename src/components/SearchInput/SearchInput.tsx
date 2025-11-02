interface Props {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  isCityLoading?: boolean;
}
export const SearchInput = ({ city, setCity }: Props) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const onInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onInputSubmit} className="flex gap-3">
        <div className="input-search relative w-96">
          <img
            src="src\assets\images\icon-search.svg"
            alt="search-icon"
            className="absolute z-50 left-3 top-2.5"
          />
          <input
            type="search"
            placeholder="Search for a place.."
            value={city}
            onChange={onInputChange}
            className="input input-primary px-10 rounded-xl w-full"
          />
        </div>
        <button className="btn-search btn btn-primary">Search</button>
      </form>
    </>
  );
};
