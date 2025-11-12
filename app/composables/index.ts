export function useCurrentNavigation() {
  const currentNavigation = useState<CurrentNavigation>("CurrentNavigationKey", () => CurrentNavigation.Home);

  function setNewNav(newNav: CurrentNavigation): void {
    currentNavigation.value = newNav;
  }

  return { currentNavigation, setNewNav };
}
