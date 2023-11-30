export const truncateString = (string: string, maxLength: number = 100) => (
    string.length > maxLength ? `${string.slice(0, maxLength)}...` : string
);
