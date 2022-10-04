import { useAuthorization } from "../hooks/useAuthorization";

interface AuthorizeProps {
  children: React.ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function Authorize({ children, permissions, roles }: AuthorizeProps) {
  const userCanSeeComponents = useAuthorization({ permissions, roles });

  if (!userCanSeeComponents) {
    return null;
  }

  return <>{children}</>;
}
