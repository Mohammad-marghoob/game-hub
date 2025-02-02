import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

export default function GameCardSkeleton() {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="300px">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
}
