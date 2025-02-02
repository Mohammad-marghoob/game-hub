import { HStack, Skeleton, Stack } from "@chakra-ui/react";
import { SkeletonCircle } from "@/components/ui/skeleton";

export default function GenresListSkeleton() {
  return (
    <HStack gap="5" marginY="5px">
      <SkeletonCircle size="12" />
      <Stack flex="1">
        <Skeleton height="5" />
      </Stack>
    </HStack>
  );
}
