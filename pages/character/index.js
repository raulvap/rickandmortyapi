import useGetCharactersPaginated from "../../hooks/useGetCharactersPaginated";
import BasicLayout from "../../layouts/BasicLayout";
import CharacterList from "../../components/templates/CharacterList";
import SearchCharacter from "../../components/organisms/SearchCharacter";
import Loading from "../../components/molecules/Loading";

const Index = () => {
  const {
    currentPage,
    isLoading,
    listInfo,
    loadInfo,
    searchParams,
    setSearchParams,
    totalCount,
    totalPages,
  } = useGetCharactersPaginated("character");

  return (
    <BasicLayout>
      <div className="page">
        <h1>CHARACTERS</h1>
        <SearchCharacter
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          loadInfo={loadInfo}
        />

        {isLoading ? (
          <Loading text="characters" />
        ) : (
          <CharacterList
            listInfo={listInfo}
            totalCount={totalCount}
            totalPages={totalPages}
            currentPage={currentPage}
            loadInfo={loadInfo}
          />
        )}
      </div>
    </BasicLayout>
  );
};

export default Index;
