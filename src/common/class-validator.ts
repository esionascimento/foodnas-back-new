import { ClassConstructor, plainToInstance } from 'class-transformer';

export const plainPick = <T, V>(
  classMain: ClassConstructor<T>,
  classTransform: V,
) => {
  return plainToInstance(classMain, classTransform, {
    excludeExtraneousValues: true,
  });
};
