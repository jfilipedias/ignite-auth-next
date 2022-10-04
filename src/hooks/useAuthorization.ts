import { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";

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

  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) => {
      return user?.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.every((role) => {
      return user?.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
