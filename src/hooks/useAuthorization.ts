import { useAuth } from "../contexts/AuthContext";
import { validateUserPermissions } from "../utils/validateUserPermissions";
import { validateUserRoles } from "../utils/validateUserRoles";

type UseAuthorizationParams = {
  permissions?: string[];
  roles?: string[];
};

export function useAuthorization({
  permissions,
  roles,
}: UseAuthorizationParams) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return false;
  }

  const userHasAuthorization =
    validateUserPermissions({ user, permissions }) &&
    validateUserRoles({ user, roles });

  return userHasAuthorization;
}
