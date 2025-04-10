import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CollectionsLoading() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-4 w-[350px] mt-2" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Skeleton className="h-4 w-[120px]" />
                </CardTitle>
                <Skeleton className="h-4 w-4 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-7 w-[100px]" />
                <Skeleton className="h-4 w-[80px] mt-1" />
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="space-y-4">
        <Skeleton className="h-10 w-[400px]" />

        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <Skeleton className="h-9 w-[250px]" />
            <Skeleton className="h-9 w-[100px]" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-9 w-[180px]" />
            <Skeleton className="h-9 w-[100px]" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <Skeleton className="h-5 w-[200px]" />
            <Skeleton className="h-4 w-[300px] mt-1" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] w-full px-6">
              <div className="border-b py-3">
                <div className="grid grid-cols-8 gap-4">
                  {Array(8)
                    .fill(null)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>
              </div>
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="border-b py-4">
                    <div className="grid grid-cols-8 gap-4">
                      {Array(8)
                        .fill(null)
                        .map((_, j) => (
                          <Skeleton key={j} className="h-4 w-full" />
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-4 w-[250px] mt-1" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Skeleton className="h-4 w-[100px]" />
                          <Skeleton className="h-3 w-[80px]" />
                        </div>
                        <Skeleton className="h-4 w-[50px]" />
                      </div>
                      <Skeleton className="h-2 w-full" />
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-4 w-[250px] mt-1" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[300px] w-full rounded-md" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
