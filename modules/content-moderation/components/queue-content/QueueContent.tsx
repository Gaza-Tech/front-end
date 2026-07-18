import React from 'react';
import { getReportQueueQuery } from '@/modules/content-moderation/queries';
import { ReportQueueSearchParamsType } from '@/modules/content-moderation/search-params';
import ReportQueueList from '@/modules/content-moderation/components/report-queue-list/ReportQueueList';
import ReportQueuePagination from '@/modules/content-moderation/components/report-queue-pagination/ReportQueuePagination';

interface QueueContentProps {
  params: ReportQueueSearchParamsType;
}

const QueueContent: React.FC<QueueContentProps> = async ({ params }) => {
  const { items, totalCount } = await getReportQueueQuery(params);

  return (
    <div className="flex flex-col">
      <div className="h-full flex-2 overflow-y-auto bg-red-500">
        <ReportQueueList items={items} />
      </div>
      <div>
        <ReportQueuePagination totalCount={totalCount} />
      </div>
    </div>
  );
};

export default QueueContent;
