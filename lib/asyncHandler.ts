type AsyncFunc<T extends any[], R> = (...args: T) => Promise<R>;

export const asyncHandler = <T extends any[], R>(
  asyncFunc: AsyncFunc<T, R>
) => {
  return async (...args: T): Promise<R> => {
    try {
      return await asyncFunc(...args);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(errorMessage);
    }
  };
};
