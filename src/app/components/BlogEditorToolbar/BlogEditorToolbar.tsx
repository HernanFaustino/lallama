import { Toolbar, ToolbarGroup, ToolbarSeparator } from '@/components/tiptap-ui-primitive/toolbar';
import { Button } from '@/components/tiptap-ui-primitive/button';
import { Spacer } from '@/components/tiptap-ui-primitive/spacer';

import { Bold, Italic } from 'lucide-react';
import { HeadingDropdownMenu } from '../tiptap-ui/heading-dropdown-menu';
import type { Editor } from '@tiptap/react';

interface ToolbarInterface {
  editor: Editor | null;
}

export default function BlogEditorToolbar({ editor }: ToolbarInterface) {
  return (
    <Toolbar variant="fixed">
      <ToolbarGroup>
        <Button
          data-style="primary"
          data-active-state="off"
          onClick={() => console.log('Bold clicked')}
          data-size="large"
        >
          <Bold strokeWidth={3} className="tiptap-button-icon" />
        </Button>
        <Button data-style="ghost">
          <Italic className="tiptap-button-icon" />
        </Button>
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <Button data-style="ghost">Format</Button>
        <HeadingDropdownMenu
          editor={editor}
          levels={[1, 2, 3, 4, 5, 6]}
          hideWhenUnavailable={true}
          portal={false}
          onOpenChange={(isOpen) => console.log('Dropdown', isOpen ? 'opened' : 'closed')}
        />
      </ToolbarGroup>

      <Spacer />

      <ToolbarGroup>
        <Button data-style="primary">Save</Button>
      </ToolbarGroup>
    </Toolbar>
  );
}
