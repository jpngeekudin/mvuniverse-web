import LogoExploreAllCategories from 'assets/images/navbar/navbar-explore-all-categories.svg';
import LogoExploreNew from 'assets/images/navbar/navbar-explore-new.svg';
import LogoExploreArt from 'assets/images/navbar/navbar-explore-art.svg';
import LogoExploreCollectibles from 'assets/images/navbar/navbar-explore-collectibles.svg';
import LogoExploreFashion from 'assets/images/navbar/navbar-explore-fashion.svg';
import LogoExploreHotCollections from 'assets/images/navbar/navbar-explore-hot-collections.svg';
import LogoExploreMusic from 'assets/images/navbar/navbar-explore-music.svg';
import LogoExplorePhotography from 'assets/images/navbar/navbar-explore-photography.svg';
import LogoExploreUtility from 'assets/images/navbar/navbar-explore-utility.svg';
import LogoExploreDomainName from 'assets/images/navbar/navbar-explore-domain-name.svg';
import LogoAvatar from 'assets/images/navbar/navbar-avatar.svg';
import LogoProfileFavorites from 'assets/images/navbar/navbar-profile-favorites.svg';
import LogoProfileWatchlist from 'assets/images/navbar/navbar-profile-watchlist.svg';
import LogoProfileMyCollections from 'assets/images/navbar/navbar-profile-my-collections.svg';
import LogoProfileSettings from 'assets/images/navbar/navbar-profile-settings.svg';
import LogoProfileLogout from 'assets/images/navbar/navbar-profile-logout.svg';

export const menuConfig = [
  {
    name: 'Explore',
    path: 'explore',
    childCols: 2,
    children: [
      { name: 'All Categories', icon: LogoExploreAllCategories },
      { name: 'Hot Collections', icon: LogoExploreHotCollections },
      { name: 'New', icon: LogoExploreNew },
      { name: 'Music', icon: LogoExploreMusic },
      { name: 'Art', icon: LogoExploreArt },
      { name: 'Photography', icon: LogoExplorePhotography },
      { name: 'Collectibles', icon: LogoExploreCollectibles },
      { name: 'Utility', icon: LogoExploreUtility },
      { name: 'Fashion', icon: LogoExploreFashion },
      { name: 'Domain Names', icon: LogoExploreDomainName },
    ]
  },
  {
    name: 'Stats',
    path: 'stats',
    childCols: 1,
    children: [
      { name: 'Rankings', icon: null },
      { name: 'Live Activity', icon: null }
    ]
  },
  {
    name: 'Create',
    path: 'create',
    childCols: 1,
    children: [],
  }
];

export const profileMenuConfig = [
  { name: 'Profile', icon: LogoAvatar },
  { name: 'Favorites', icon: LogoProfileFavorites },
  { name: 'Watchlist', icon: LogoProfileWatchlist },
  { name: 'My Collections', icon: LogoProfileMyCollections },
  { name: 'Settings', icon: LogoProfileSettings },
  { name: 'Logout', icon: LogoProfileLogout },
];