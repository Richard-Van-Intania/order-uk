export function useCurrentNavigation() {
  const currentNavigation = useState<CurrentNavigation>("CurrentNavigationKey", () => CurrentNavigation.Home);

  function setNewNav(newNav: CurrentNavigation): void {
    currentNavigation.value = newNav;
  }

  return { currentNavigation, setNewNav };
}

export function useCurrentAbout() {
  const currentAbout = useState<CurrentAbount>("CurrentAboutKey", () => CurrentAbount.Frequent);

  function setNewAbout(newAbout: CurrentAbount): void {
    currentAbout.value = newAbout;
  }

  return { currentAbout, setNewAbout };
}
